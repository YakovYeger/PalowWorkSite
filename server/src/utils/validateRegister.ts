import { userNamePasswordInput } from "../resolvers/userNamePasswordInput";

export const validateRegister = (options: userNamePasswordInput) => {
	//email validation
	if (!options.email.includes("@")) {
		return [
			{
				field: "email",
				message: "invalid email: email must include @ ",
			},
		];
	}
	// simple validation for password creation
	if (options.password.length <= 4) {
		return [
			{
				field: "password",
				message: "password must be longer than four characters",
			},
		];
	}

	return null;
};
