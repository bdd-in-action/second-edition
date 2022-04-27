import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export const LocateRegistrationForm = () =>
    Task.where(`#actor locates Frequent Flyer registration form`,
        Navigate.to('/register'),
    )
