import React from 'react'
function wait() {
    return new Promise((resolve: any, reject)=> {
        setTimeout(() => {
           return resolve() 
        }, 4000);
    })
}
export default async function page() {
    await wait()
  return (
    <div>page</div>
  )
}
