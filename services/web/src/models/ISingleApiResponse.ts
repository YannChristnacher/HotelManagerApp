export interface ISingleApiResponse<T>
{
    success: boolean,
    message: string,
    data: T,
    request: {
        [key: string]: string
    }
}