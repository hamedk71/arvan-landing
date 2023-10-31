// const NUMBER_REG = new RegExp("^\\d*$")
const NUMBER_REG = /^[\d\u06F0-\u06F9\u0660-\u0669]+$/

const EMAIL_REG = /^([\w-\.*]+@([\w-]+\.)+[\w-]{2,4})?$/

const NAME_REG = /^[\p{L}\s]+$/u


export { NUMBER_REG, NAME_REG, EMAIL_REG }