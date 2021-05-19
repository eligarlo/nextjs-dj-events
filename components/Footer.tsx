import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

interface Props {
  currentYear: number
}

const Footer: React.FC<Props> = ({ currentYear }) => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events {currentYear}</p>
      <p>
        <Link href='/about'>About This Project</Link>
      </p>
    </footer>
  )
}

export default Footer
