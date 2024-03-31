import { PayResponseMessage } from "@/constants";
import { IResponse } from "@/interfaces";

export const payAmount = (): Promise<IResponse> | null => {
    try {
        return new Promise((resolve) => {
            setTimeout(() => {
                const success = Boolean(Math.round(Math.random()));
                resolve({
                    success,
                    message: success
                        ? PayResponseMessage.success
                        : PayResponseMessage.error,
                });
            }, 2000);
        });
    } catch (e) {
        console.error(e);
        return null;
    }
};
