import * as Yup from "yup";
export { Yup };

// Uncomment if you need debouncing
/*
export const debouncing = (func: (...args: any[]) => void, delay = 400) => {
    let debounceTimer: ReturnType<typeof setTimeout>;
    return function (this: Window, ...args: any[]) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
};
*/

import CryptoJS from "crypto-js";
import { ENVIRONMENT } from "./constant";

// Secret key used for AES decryption (must match backend)
const SECRET_KEY = ENVIRONMENT.KEY;

/**
 * Decrypts the data using AES-256-CBC.
 * @param encryptedText Format: "ivHex:encryptedHex"
 * @returns Decrypted string or null on error
 */
export function decrypt(encryptedText: string): string | null {
  try {
    const [ivHex, encryptedDataHex] = encryptedText.split(":");
    const iv = CryptoJS.enc.Hex.parse(ivHex);
    const encryptedBase64 = CryptoJS.enc.Hex.parse(encryptedDataHex).toString(
      CryptoJS.enc.Base64
    );

    const decrypted = CryptoJS.AES.decrypt(
      encryptedBase64,
      CryptoJS.enc.Utf8.parse(SECRET_KEY),
      {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
}

/**
 * Decrypt and return URL param data.
 */
export const useDecryptedUrlParams = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  const encryptedData = urlParams.get("data");

  if (encryptedData) {
    return decrypt(decodeURIComponent(encryptedData));
  }

  return null;
};

/**
 * Parse date string into components and formatted version.
 */
export const getComputedDate = (str: string) => {
  const date = new Date(str);
  return {
    month: date.getMonth(),
    year: date.getFullYear(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    hours: date.getHours(),
    date: date.getDate(),
    formattedDate: function (): string {
      return `${this.date < 10 ? "0" : ""}${this.date} ${date.toLocaleString(
        "default",
        { month: "long" }
      )}, ${this.year}`;
    },
  };
};

/**
 * Convert month number (0–11) to month name.
 */
export const getMonthName = (monthNumber: number): string => {
  const tempDate = new Date(2000, monthNumber, 1); // dummy year
  return tempDate.toLocaleString("en-US", { month: "long" });
};

/**
 * Strip HTML tags from string.
 */
export const removeTags = (str: string): string => {
  if (!str) return str;
  return str.replace(/(<([^>]+)>)/gi, "");
};

/**
 * Convert HTML string to plain text.
 */
export const htmlToPlainText = (htmlString: string): string => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  return tempElement.textContent || tempElement.innerText || "";
};

/**
 * Replace spaces with %20 in URL string.
 */
export const changeToURL = (str: string): string => {
  return str.replace(/ /g, "%20");
};

/**
 * Filter array of items by status === "ENABLE".
 */
export const getEnabledData = <T extends { status?: string }>(
  data: T[]
): T[] => {
  return data.filter((item) => item.status === "ENABLE");
};

/**
 * Remove <body> and </body> tags from HTML string.
 */
export const removeBodyTag = (htmlString: string): string => {
  let updatedHtml = htmlString.replace(/<body[^>]*>/i, "");
  updatedHtml = updatedHtml.replace(/<\/body>/i, "");
  return updatedHtml;
};
