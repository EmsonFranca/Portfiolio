// Type declarations for global imports
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.sass' {
  const content: { [className: string]: string }
  export default content
}

// Add support for importing CSS as side effects
declare module '*.module.css'
declare module '*.module.scss'
declare module '*.module.sass'