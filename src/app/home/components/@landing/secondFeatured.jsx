import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import CardItem from '@/components/card/cardItem'
import Link from 'next/link'
import Image from 'next/image';


export default function SecondFeatured() {

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const api = `${process.env.NEXT_PUBLIC_API}/api/stories?featured=1&sort=2`;

  const { data, error } = useSWR(api, fetcher);

  const item = data ? data.data[0] : null;

  return (error ? 'Error' : <CardItem data={item} />)
}
