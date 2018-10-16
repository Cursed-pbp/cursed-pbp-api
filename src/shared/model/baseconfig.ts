export class BaseConfig {
    public static get isServerless(): string {
        return process.env.IS_SERVERLESS;
    }

    public static get isServerlessOffline(): string {
        return process.env.IS_OFFLINE;
    }
}