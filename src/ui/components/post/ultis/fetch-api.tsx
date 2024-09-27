import { stringify } from "qs";
import { getStrapiURL } from "./api-helper";
export async function fetchAPI<T>(path: string, urlParamsObject = {}, options = {}): Promise<T> {
	try {
	  // Merge default and user options
	  const mergedOptions = {
		next: { revalidate: 60 },
		headers: {
		  "Content-Type": "application/json",
		},
		...options,
	  };
  
	  // Build request URL
	  const query = stringify(urlParamsObject);
	  const requestUrl = `${getStrapiURL(`/api${path}${query ? `?${query}` : ""}`)}`;
  
	  // Trigger API call

	  const response = await fetch(requestUrl, mergedOptions);
  
	  // Handle response error
	  if (!response.ok) {
		throw new Error(`Error fetching API: ${response.statusText}`);
	  }
  
	  // Parse response as JSON and cast it to the expected generic type T
	  const data = (await response.json()) as T;
	  return data;
	} catch (error) {
	  console.error(error);
	  throw new Error(`Please check if your server is running and you set all the required tokens.`);
	}
  }


  export async function fileSystemAPI<T>(path: string, options = {}): Promise<T> {
	try {
	  // Merge default and user options
	  const mergedOptions = {
		next: { revalidate: 60 },
		headers: {
		  "Content-Type": "application/json",
		},
		...options,
	  };
  
	  // Build request URL
	  const requestUrl = `${getStrapiURL(`/file-system${path}`)}`;
  
	  // Trigger API call

	  const response = await fetch(requestUrl, mergedOptions);
  
	  // Handle response error
	  if (!response.ok) {
		throw new Error(`Error fetching API: ${response.statusText}`);
	  }
  
	  // Parse response as JSON and cast it to the expected generic type T
	  const data = (await response.json()) as T;
	  return data;
	} catch (error) {
	  console.error(error);
	  throw new Error(`Please check if your server is running and you set all the required tokens.`);
	}
  }