package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay;

import com.google.common.eventbus.Subscribe;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.events.ActorAsksQuestion;
import net.serenitybdd.screenplay.events.ActorBeginsPerformanceEvent;
import net.serenitybdd.screenplay.events.ActorEndsPerformanceEvent;
import net.serenitybdd.screenplay.events.ActorPerforms;
import net.thucydides.core.steps.ReplaceField;
import net.thucydides.core.steps.StepName;
import org.apache.commons.lang3.StringUtils;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.*;

public class PerformableLogger {
    int level = 0;
    String currentActor;

    private static final String ANSI_GREEN = "\u001B[32m";
    private static final String ANSI_RESET = "\u001B[0m";

    @Subscribe
    public void beginPerformance(ActorBeginsPerformanceEvent performanceEvent) {
        currentActor = performanceEvent.getName();
        level++;
    }

    @Subscribe
    public void endPerformance(ActorEndsPerformanceEvent performanceEvent) {
        level--;
    }

    @Subscribe
    public void perform(ActorPerforms performAction) {
        String stepTitle = "";
        if (isInstrumented(performAction.getPerformable())) {
            stepTitle = titleFromParentOf(performAction.getPerformable()).replace("{0}", currentActor);
        } else {
            stepTitle = performAction.getPerformable().toString().replace("{0}", currentActor);
        }
        System.out.println(ANSI_GREEN + StringUtils.repeat("-", level) + " " + stepTitle + ANSI_RESET);
    }

    private String titleFromParentOf(Performable performable) {
        try {
            Method performAs = performable.getClass().getSuperclass().getMethod("performAs", Actor.class);
            Optional<String> stepName = StepName.fromStepAnnotationIn(performAs);
            if (stepName.isPresent()) {
                Map<String, Object> fields = fieldValuesIn(performable);
                return replaceFieldTokensWithFieldValuesIn(stepName.get(),fields);
            } else {
                return performable.getClass().getSuperclass().getName();
            }
        } catch (NoSuchMethodException | IllegalAccessException e) {
            return performable.getClass().getSuperclass().getName();
        }
    }

    private Map<String, Object> fieldValuesIn(Performable performable) throws IllegalAccessException {
        Map<String, Object> fieldValues = new HashMap<>();

        for(Field field : allFieldsIn(performable.getClass())) {
            field.setAccessible(true);
            fieldValues.put(field.getName(), "" + field.get(performable));
        }
        return fieldValues;
    }

    private List<Field> allFieldsIn(Class<?> someClass) {
        List<Field> allFields = new ArrayList<>();
        Class<?> clazz = someClass;
        while (clazz != null) {
            allFields.addAll(Arrays.asList(clazz.getDeclaredFields()));
            clazz = clazz.getSuperclass();
        }
        return allFields;
    }

    private String replaceFieldTokensWithFieldValuesIn(String description, Map<String, Object> fields) {
            for(String field : fields.keySet()) {
                description = ReplaceField.in(description).theFieldCalled(field).with(fields.get(field));
            }
            return description;
    }

    private boolean isInstrumented(Performable performable) {
        return performable.toString().contains("$ByteBuddy");
    }

    @Subscribe
    public void prepareQuestion(ActorAsksQuestion questionEvent) {
        System.out.println("Question " + questionEvent.getQuestion());
    }
}
