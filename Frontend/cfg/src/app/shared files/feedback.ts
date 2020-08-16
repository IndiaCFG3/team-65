// this is the data model for Reactive form
export class Feedback {
    firstname: string;
    lastname: string;
    number: number;
    contacttype: string;
};

export const ContactType = ['None', 'Tel', 'Email'];