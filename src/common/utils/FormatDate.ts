import { format } from "date-fns";

export function formatDateCustom(date: Date): string {
    return format(date, "dd/MM/YYYY");
}
