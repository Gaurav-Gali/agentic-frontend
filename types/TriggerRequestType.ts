export type RequestData = Record<string, any>;

export type TriggerRequestType = {
    requestType: string;
    requestData: RequestData | null;
};
