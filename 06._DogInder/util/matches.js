import { fakerEN_IN } from "@faker-js/faker";

export default async function getMatches(numberOfMatches = 5) {
    const matches = []
    for(let i = 0; i < numberOfMatches; i++) {
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const result = await response.json()
        matches.push(result)
    }
    return matches
}

function getIndianProfile() {
    return {
        person: fakerEN_IN.person.fullName(),
        bio: fakerEN_IN.person.bio(),
        streetAddress: fakerEN_IN.location.streetAddress(),
        city: fakerEN_IN.location.city()
    };
};