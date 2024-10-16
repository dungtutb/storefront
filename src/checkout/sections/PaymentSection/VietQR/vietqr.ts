interface VietQRConfig {
    clientID?: string;
    apiKey?: string;
}

interface QRCodeParams {
    bank?: string;
    accountName?: string;
    accountNumber?: string;
    amount?: string;
    memo?: string;
    template?: string;
}

interface QRCodeV1Params extends QRCodeParams {
    format?: string;
}

interface QuickLinkParams extends QRCodeParams {
    media?: string;
}

interface PaymentGatewayParams {
    theme_slug: string;
    platform?: string;
    bankId?: string;
    accountName?: string;
    accountNumber?: string;
    addInfo?: string;
    amount?: string;
}

class VietQR {
    clientID: string;
    apiKey: string;
    message: string;
    apiUrl: string;

    constructor({
        clientID = '',
        apiKey = '',
    }: VietQRConfig) {
        this.clientID = clientID;
        this.apiKey = apiKey;
        this.message = 'Please check your API key and client key';
        // this.apiUrl = 'https://api.vietqr.io';
        this.apiUrl = 'https://img.vietqr.io/image';
    }

    checkKey(): boolean {
        return this.clientID !== '' && this.apiKey !== '';
    }

    sendMessage(check: boolean): void {
        if (!check) console.log(this.message);
    }

    async getTemplate(): Promise<any> {
        if (this.checkKey()) {
            return getData(`${this.apiUrl}/v2/template`);
        }
        this.sendMessage(this.checkKey());
    }

    async getBanks(): Promise<any> {
        if (this.checkKey()) {
            return getData(`${this.apiUrl}/v2/banks`);
        }
        this.sendMessage(this.checkKey());
    }

    async genQRCodeBase64({
        bank = '',
        accountName = '',
        accountNumber = '',
        amount = '',
        memo = '',
        template = 'qr_only',
    }: QRCodeParams): Promise<any> {
        if (this.checkKey()) {
            return postData(`${this.apiUrl}/v2/generate`, {
                accountNo: accountNumber,
                accountName: accountName,
                acqId: bank,
                addInfo: memo,
                amount: amount,
                template: template,
            });
        }
        this.sendMessage(this.checkKey());
    }

    async genQRCodeBase64V1({
        bank = '',
        accountName = '',
        accountNumber = '',
        amount = '',
        memo = '',
        format = 'qr_only',
    }: QRCodeV1Params): Promise<any> {
        if (this.checkKey()) {
            return postData(`${this.apiUrl}/v1/generate`, {
                accountNo: accountNumber,
                accountName: accountName,
                acqId: bank,
                addInfo: memo,
                amount: amount,
                format: format,
            });
        }
        this.sendMessage(this.checkKey());
    }

    genQuickLink({
        bank = '',
        accountName = '',
        accountNumber = '',
        amount = '',
        memo = '',
        template = 'qr_only',
        media = ''
    }: QuickLinkParams): string | void {
        if (this.checkKey()) {
            const url = media === '.jpg'
                ? encodeURI(`${this.apiUrl}/${bank}-${accountNumber}-${template}.jpg?${amount? `&amount=${amount}`: ""}${memo? `&addInfo=${memo}`: ""}${accountName? `&accountName=${accountName}`: ""}`).replace(/%20/g, "+")
                : encodeURI(`${this.apiUrl}/${bank}-${accountNumber}-${template}.png?${amount? `&amount=${amount}`: ""}${memo? `&addInfo=${memo}`: ""}${accountName? `&accountName=${accountName}`: ""}`).replace(/%20/g, "+");
            return url;
        }
        this.sendMessage(this.checkKey());
    }

    async createPaymentGateway({
        theme_slug,
        platform = '',
        bankId = '',
        accountName = '',
        accountNumber = '',
        addInfo = '',
        amount = '',
    }: PaymentGatewayParams): Promise<any> {
        if (this.checkKey()) {
            const entity: {
                apiKey: string;
                clientId: string;
                theme_slug: string;
                bankId?: string;
                accountName?: string;
                accountNumber?: string;
                addInfo?: string;
                amount?: string;
                platform?: string;
            } = {
                apiKey: this.clientID,
                clientId: this.apiKey,
                theme_slug: theme_slug
            };
            if (bankId) entity.bankId = bankId;
            if (accountName) entity.accountName = accountName;
            if (accountNumber) entity.accountNumber = accountNumber;
            if (addInfo) entity.addInfo = addInfo;
            if (amount) entity.amount = amount;
            if (platform) entity.platform = platform;
            return postData(`https://gateway.vietqr.io/payment-gateway/v1/createToken`, entity);
        }
        this.sendMessage(this.checkKey());
    }
}

async function getData(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.log(err);
        return err;
    }
}

async function postData(url: string, data: any): Promise<any> {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.log(err);
        return err;
    }
}

export { VietQR };

