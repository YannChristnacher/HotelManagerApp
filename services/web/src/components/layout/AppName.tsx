import styles from "@/css/layout.module.scss"

/**
 * Component for displayed App name in the header
 */
export default function AppName()
{
    return (
        <div className={styles.appName}>
            <h1>My Hotel App</h1>
        </div>
    )
}