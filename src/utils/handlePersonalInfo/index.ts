export const handlePersonalInfo = (
    fieldsToValidate: Record<string, string>
) => {
    const arrayOfFieldNames = Object.keys(fieldsToValidate)

    const unfilledFields = arrayOfFieldNames.filter(
        (field) => !fieldsToValidate[field]
    )

    return unfilledFields
}
