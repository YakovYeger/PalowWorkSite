import { readFileSync } from "fs";
import { parsedData } from "src/types";
const papa = require("papaparse");

const readCSV = async (filePath: string) => {
	const csvFile = readFileSync(filePath);
	const csvData = csvFile.toString();
	return new Promise<parsedData[]>((resolve) => {
		papa.parse(csvData, {
			header: true,
			complete: (results: { data: parsedData[] }) => {
				console.log("Complete", results.data.length, "records.");
				resolve(results.data);
			},
		});
	});
};

export async function parseScrapedData(fileName: string) {
	let data: parsedData[] = await readCSV(fileName);

	return data.map((e) => ({
		companyName: e.CompanyName,
		jobTitle: e.JobTitle,
		location: e.Location,
		category: e.Location,
		jobRequirements: e.JobRequirements,
		link: e.Link
	}));
}
