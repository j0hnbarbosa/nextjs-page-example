import Head from 'next/head'
import React from 'react'

type PropsValues = {
  title?: string,
  description?: string,
}

const HeadMeta = (props: PropsValues) => {
  const {
    title,
    description,
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadMeta