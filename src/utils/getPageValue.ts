const getPageValue = (url: string): number => parseInt(new URL(url).searchParams.get("page") || "0");

export default getPageValue;
