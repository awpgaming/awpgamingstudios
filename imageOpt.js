// export default function cloudinaryLoader({ src, width, quality }) {
//     const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
//     return `/dist${src}`
//   }
export default function myImageLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`
}