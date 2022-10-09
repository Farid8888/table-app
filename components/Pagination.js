import React,{useState} from 'react'
import Link from 'next/link'
import classes from '../styles/Pagination.module.css'


export default function Pagination({router}) {
    const [pagCount,setPagCount] = useState({
        first:1,
        second:2,
        third:3,
        fourth:4,
        fifth:5,
        sixth:6
    })
    const prev=()=>{
        setPagCount(prevst=>{
            return {
                first:prevst.first -1,
                second:prevst.second -1,
                third:prevst.third -1,
                fourth:prevst.fourth -1,
                fifth:prevst.fifth - 1,
                sixth:prevst.sixth - 1
            }
        })
       } 
       const next=()=>{
        setPagCount(prevst=>{
            return {
                first:prevst.first +1,
                second:prevst.second +1,
                third:prevst.third +1,
                fourth:prevst.fourth +1,
                fifth:prevst.fifth + 1,
                sixth:prevst.sixth + 1
            }
        })
       }
  return (
    <div className={classes.pagination}>
  {pagCount.first>1 && <Link href={`/table/${+router.query.id-1}`}><a onClick={prev} type='button'>&laquo;</a></Link>}
  <Link  href={`/table/${pagCount.first}`}><a className={router.asPath === `/table/${pagCount.first}` ? classes.active : ""}>{pagCount.first.toString()}</a></Link>
  <Link href={`/table/${pagCount.second}`}><a className={router.asPath === `/table/${pagCount.second}`  ? classes.active : ""} >{pagCount.second.toString()}</a></Link>
  <Link href={`/table/${pagCount.third}`}><a className={router.asPath === `/table/${pagCount.third}`  ? classes.active : ""} >{pagCount.third.toString()}</a></Link>
  <Link href={`/table/${pagCount.fourth}`}><a className={router.asPath === `/table/${pagCount.fourth}`  ? classes.active : ""} >{pagCount.fourth.toString()}</a></Link>
  <Link href={`/table/${pagCount.fifth}`}><a className={router.asPath === `/table/${pagCount.fifth}`  ? classes.active : ""} >{pagCount.fifth.toString()}</a></Link>
  <Link href={`/table/${pagCount.sixth}`}><a className={router.asPath === `/table/${pagCount.sixth}`  ? classes.active : ""} >{pagCount.sixth.toString()}</a></Link>
  <Link href={`/table/${+router.query.id+1}`}><a onClick={next} type='button'>&raquo;</a></Link>
</div>
  )
}
