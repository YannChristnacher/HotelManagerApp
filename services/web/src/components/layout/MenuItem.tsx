"use client";

import styles from "@/css/layout.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Component represent a link of the header
 */
export default function MenuItem({ label, to }: { label: string; to: string }) {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/hotels") {
            return pathname === "/hotels" || (pathname.startsWith("/hotels/") && !pathname.endsWith("new"));
        }
        return pathname === path;
    };

    const className = `${styles.menuItem} ${isActive(to) ? styles.active : ""}`;

    return (
        <div className={className}>
            <Link href={to}>{label}</Link>
        </div>
    );
}