export const b = (country) => {
    fetch('visaPolicy.json')
        .then((res) => res.json())
        .then((data) => {
            return data
    })
}