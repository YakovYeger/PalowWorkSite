import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type FieldError = {
	__typename?: "FieldError";
	field: Scalars["String"];
	message: Scalars["String"];
};

export type JobListing = {
	__typename?: "JobListing";
	id: Scalars["Int"];
	jobTitle: Scalars["String"];
	companyName: Scalars["String"];
	jobRequirements: Scalars["String"];
	location: Scalars["String"];
	category: Scalars["String"];
	link: Scalars["String"];
	createdAt: Scalars["String"];
};

export type Mutation = {
	__typename?: "Mutation";
	insertJobListingBatch: Array<JobListing>;
	register: UserResponse;
	login: UserResponse;
	logout: Scalars["Boolean"];
};

export type MutationInsertJobListingBatchArgs = {
	filename: Scalars["String"];
};

export type MutationRegisterArgs = {
	options: UserNameEmailInput;
};

export type MutationLoginArgs = {
	usernameOrEmail: Scalars["String"];
};

export type Query = {
	__typename?: "Query";
	hello: Scalars["String"];
	jobListings: Array<JobListing>;
	jobListing?: Maybe<JobListing>;
	me?: Maybe<User>;
};

export type QueryJobListingArgs = {
	id: Scalars["Int"];
};

export type User = {
	__typename?: "User";
	id: Scalars["Int"];
	email: Scalars["String"];
	name: Scalars["String"];
	createdAt: Scalars["String"];
	premium: Scalars["Boolean"];
};

export type UserResponse = {
	__typename?: "UserResponse";
	errors?: Maybe<Array<FieldError>>;
	user?: Maybe<User>;
};

export type UserNameEmailInput = {
	email: Scalars["String"];
	name: Scalars["String"];
};

export type LoginMutationVariables = Exact<{
	usernameOrEmail: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
	login: { __typename?: "UserResponse" } & {
		user?: Maybe<
			{ __typename?: "User" } & Pick<User, "id" | "name" | "premium">
		>;
	};
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation" } & Pick<
	Mutation,
	"logout"
>;

export type JobListingQueryVariables = Exact<{
	id: Scalars["Int"];
}>;

export type JobListingQuery = { __typename?: "Query" } & {
	jobListing?: Maybe<
		{ __typename?: "JobListing" } & Pick<
			JobListing,
			| "companyName"
			| "jobRequirements"
			| "location"
			| "link"
			| "createdAt"
		>
	>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = { __typename?: "Query" } & {
	jobListings: Array<
		{ __typename?: "JobListing" } & Pick<
			JobListing,
			| "id"
			| "jobTitle"
			| "companyName"
			| "jobRequirements"
			| "location"
			| "link"
		>
	>;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "Query" } & {
	me?: Maybe<{ __typename?: "User" } & Pick<User, "id" | "name" | "premium">>;
};

export const LoginDocument = gql`
	mutation Login($usernameOrEmail: String!) {
		login(usernameOrEmail: $usernameOrEmail) {
			user {
				id
				name
				premium
			}
		}
	}
`;
export type LoginMutationFn = Apollo.MutationFunction<
	LoginMutation,
	LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *   },
 * });
 */
export function useLoginMutation(
	baseOptions?: Apollo.MutationHookOptions<
		LoginMutation,
		LoginMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
		LoginDocument,
		options
	);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
	LoginMutation,
	LoginMutationVariables
>;
export const LogoutDocument = gql`
	mutation Logout {
		logout
	}
`;
export type LogoutMutationFn = Apollo.MutationFunction<
	LogoutMutation,
	LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
	baseOptions?: Apollo.MutationHookOptions<
		LogoutMutation,
		LogoutMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
		LogoutDocument,
		options
	);
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
	LogoutMutation,
	LogoutMutationVariables
>;
export const JobListingDocument = gql`
	query JobListing($id: Int!) {
		jobListing(id: $id) {
			companyName
			jobRequirements
			location
			link
			createdAt
		}
	}
`;

/**
 * __useJobListingQuery__
 *
 * To run a query within a React component, call `useJobListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobListingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJobListingQuery(
	baseOptions: Apollo.QueryHookOptions<
		JobListingQuery,
		JobListingQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<JobListingQuery, JobListingQueryVariables>(
		JobListingDocument,
		options
	);
}
export function useJobListingLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		JobListingQuery,
		JobListingQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<JobListingQuery, JobListingQueryVariables>(
		JobListingDocument,
		options
	);
}
export type JobListingQueryHookResult = ReturnType<typeof useJobListingQuery>;
export type JobListingLazyQueryHookResult = ReturnType<
	typeof useJobListingLazyQuery
>;
export type JobListingQueryResult = Apollo.QueryResult<
	JobListingQuery,
	JobListingQueryVariables
>;
export const Document = gql`
	{
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

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(
	baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<Query, QueryVariables>(Document, options);
}
export function useLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<Query, QueryVariables>(Document, options);
}
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;
export const MeDocument = gql`
	query Me {
		me {
			id
			name
			premium
		}
	}
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
	baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
