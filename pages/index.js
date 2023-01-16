import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default class App extends React.Component {
  render(){ 
	return (
      <>
        <h1>Hello webinar</h1>
      </>
    )
  }
}
