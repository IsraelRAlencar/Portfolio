import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const COOKIE_NAME = "NEXT_LOCALE";

export default getRequestConfig(async () => {
    const locale = (await cookies()).get(COOKIE_NAME)?.value || 'pt';

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});