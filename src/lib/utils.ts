import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const ARFLIP_PROCESS_ID = "XjaI24il_p6DT_ISYn8SWbyptNuCcp0XkxNkyt3hQz8";
//basically process id use for the backend the process kumbaga
export const ARFLIP_PROCESS_ID = "ccbHS5mc1kSq8uD09BjtQwyQ19Owji3lw5QWZkCbaPw";
