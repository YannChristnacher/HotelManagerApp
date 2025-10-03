import styles from "@/css/layout.module.scss"
export default function MenuItem({label}: {label: string})
{
    return (
        <div className={styles.menuItem}>
            { label }
        </div>
    )
}