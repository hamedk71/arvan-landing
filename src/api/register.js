import fetcher from "@/config/fetcher";

export const CREATE = async (data) => {
    return await fetcher({
        url: '/tables/register/rows',
        method: "POST",
        body: data,
    });
};