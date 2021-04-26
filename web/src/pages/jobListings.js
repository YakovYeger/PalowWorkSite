import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { withApollo } from "../utils/withApollo";

import { gql, useQuery } from "@apollo/client";

import CyberArk from "../assets/logos/cyberArk.jpeg";
import Cisco from "../assets/logos/Cisco.png";
import Dell from "../assets/logos/Dell.png";
import Google from "../assets/logos/Google.svg"
import Wix from "../assets/logos/Wix.png";
// import { useJobListingsQuery } from "../generated/graphql";

const JOB_LISTINGS = gql`
	query {
		jobListings {
			id
			jobTitle
			companyName
			jobRequirements
			location
			link
		}
	}
`;

const companyLogos = {"Cyberark": CyberArk, "Cisco": Cisco, "Dell": Dell, "Google": Google, "Wix": Wix};
const JobListings = () => {
	 const { loading, error, data } = useQuery(JOB_LISTINGS);
	// const { loading, error, data } = useJobListingsQuery;
	if (!data && loading) {
		return <p>loading....</p>;
	}
	if (error) {
		return <p>error</p>;
	}
	return (
		<>
			<PageWrapper>
				{data.jobListings.map((jl) => (
					<div>
						<div
							className="bg-default-1 pt-16 pt-lg-15 pb-5 pb-lg-3"
							key={jl.id}
						>
							<div className="container">
								<div className="row">
									<div className="col-12  col-xs-12 ">
										{/* <!-- form --> */}
										<div className=" ml-lg-0 ml-md-15">
											<div className="pt-6">
												<div className="row justify-content-center">
													<div className="col-12 col-lg-6">
														{/* <!-- Start Feature One --> */}
														<div className="bg-white px-8 pt-9 pb-5 rounded-4 mb-5 feature-cardOne-adjustments">
															<div className="d-block mb-7">
																<Link href="/#">
																	<a>
																		<img
																			src={
																				companyLogos[jl.companyName]
																			}
																			alt=""
																		/>
																	</a>
																</Link>
															</div>
															<Link href="/#">
																<a className="font-size-3 d-block mb-0 text-gray">
																	{
																		jl.companyName
																	}
																</a>
															</Link>
															<Link href="/#">
																<a className="font-size-3 d-block mb-0 text-gray">
																	{
																		jl.location
																	}
																</a>
															</Link>
															<h2 className="mt-n4">
																<Link href="/#">
																	<a className="font-size-7 text-black-2 font-weight-bold mb-4">
																		{
																			jl.jobTitle
																		}
																	</a>
																</Link>
															</h2>

															<p className="mb-7 font-size-4 text-gray">
																{}
															</p>
															<div className="card-btn-group">
																<Link href="/#">
																	<a className="btn btn-green text-uppercase btn-medium rounded-3">
																		Apply
																		Now
																	</a>
																</Link>
																<Link
																	href="/jobListing/[id]"
																	as={`/jobListing/${jl.id}`}
																>
																	<a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
																		<i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
																		see more
																	</a>
																</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</PageWrapper>
		</>
	);
};
export default withApollo({ ssr: true })(JobListings);
