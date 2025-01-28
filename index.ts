/**
 * Function that greets a person
 * @param firstname First name
 * @param lastname Last name
 */


export const greeting = (firstname: string, lastname: string) => {
	const.log(`Hello ${firstname} ${lastname}`);
};

const people = [
	{first name: "Arne", lastname: "Arnesen" },
	{first name: "Magnus", lastname: "Magnusson" },
	{first name: "Siri", lastname: "Sirisen" },
	{first name: "Stefan", lastname: "Stefanson" },

];

export const greetTheGang = () => {
	people.forEach((person) => {
		greeting(person.firstname, person.lastname);
	});
};

