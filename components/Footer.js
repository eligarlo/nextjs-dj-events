import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  const currentYear = () => {
    const d = new Date()
    return d.getFullYear()
  }

  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events {currentYear()}</p>
      <p>
        <Link href='/about'>About This Project</Link>
      </p>
    </footer>
  )
}
