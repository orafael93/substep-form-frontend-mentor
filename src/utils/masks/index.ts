export const getOnlyDigits = /\D/g
export const getOnlyLetters = /[0-9]/g
export const getTwoDigitsFollowedByOne = /(\d{2})(\d)/
export const getFiveDigitsFollowedByOne = /(\d{5})(\d)/

export const getAllSpecialCharacters = /[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi

export const maskToValidateEmail =
    /^(?=.{1,90}$)([_a-zA-Z0-9-]+(\.[_a-zA-Z-0-9-]+)*@[a-zA-Z-0-9-]+(\.[a-zA-Z-0-9-]+)*(?:\.(com|org|net|edu|gov|int|mil|co|io|br|uk))$)/

const getFourDigitsFollowedByDashAndAnyone = /(-\d{4})\d+?$/

export const addTelefoneMask = (param: string) =>
    param
        .replace(getOnlyDigits, '')
        .replace(getTwoDigitsFollowedByOne, '($1) $2')
        .replace(getFiveDigitsFollowedByOne, '$1-$2')
        .replace(getFourDigitsFollowedByDashAndAnyone, '$1')
