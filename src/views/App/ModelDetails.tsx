import { useMutation, useQuery } from "@apollo/client";
import { GET_MODEL_DATA ,VERIFY_MODEL_DOCS ,DELETE_MODEL } from "src/queries";
import { PageSkeleton } from "src/components/Skeletons";
import { useParams } from "react-router-dom";
import { getUrl } from "src/Helpers/Basic";
import { Link } from "react-router-dom";
import { SubmitButton } from "src/components/FormItems";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
// GET_MODEL_DATA
function ModelDetails() {
	let { username } = useParams();
	const checkboxRef :any = useRef(null)
	const { data ,refetch } = useQuery(GET_MODEL_DATA, {
		variables: { username: username },
	});
	const [loading,setLoading] = useState(false)
	const [verifyModelM] = useMutation(VERIFY_MODEL_DOCS);
	const [deleteModel] = useMutation(DELETE_MODEL);

	const runDeleteModel = async () => {
		try {
			let text = "Are you sure?";
			if (!window.confirm(text)) return 
			let {data} = await deleteModel({
				variables:{
					username:username
				}
			})
			window.location.href="/models"
		}catch(e) {
			alert(e)
		}
	}
	const verifyModel = async () =>{ 
		try{ 
			if(!checkboxRef.current.checked) {
				return toast.error(`Please agree with the above clause`, {
					position: "top-center",
					autoClose: 1000,
				});
			}
			setLoading(true)
			let {data} = await verifyModelM({
				variables:{
					username:username
				}
			})
			setLoading(false)
			refetch()
			return toast.success(`Model Verified successfully`, {
				position: "top-center",
				autoClose: 1000,
			});
		}catch(e:any){ 
			setLoading(false)
			toast.error(e.message, {
				position: "top-center",
				autoClose: 1000,
			});
		}
		
		
	}
	if (!data) return <PageSkeleton />;
	let modelData = data.getModelData;
	console.log(modelData);
	return (
		<>
			<div className="w-full lg:p-24 sm:p-4 ">
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<div className="flex flex-wrap -mx-3 mb-5">
							<div className="w-full max-w-full px-3 mb-6  mx-auto">
								<div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5 p-12">
									<div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
										<dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
											<div className="flex flex-col pb-3">
												<img src={getUrl(modelData.avatar)} />
											</div>
											<div className="flex flex-col pb-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Name</dt>
												<dd className="text-lg font-semibold">{modelData.name}</dd>
											</div>
											<div className="flex flex-col py-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
												<dd className="text-lg font-semibold">{modelData.email}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Username</dt>
												<dd className="text-lg font-semibold">{modelData.username}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Profile Complete</dt>
												<dd className="text-lg font-semibold">{modelData.profileComplete ? "Yes" : "No"}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">profile Setup Step</dt>
												<dd className="text-lg font-semibold">{modelData.profileSetupStep}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Documents Verified</dt>
												<dd className="text-lg font-semibold">{modelData.documentsVerified}</dd>
											</div>
											<button onClick={runDeleteModel} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove Model</button>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 px-3  md:mb-0">
						<div className="flex flex-wrap -mx-3">
							<div className="w-full max-w-full px-3 mb-6  mx-auto">
								<div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5 p-12">
									<div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
										<dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
											<div className="flex flex-col pb-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">country</dt>
												<dd className="text-lg font-semibold">{modelData.address?.country}</dd>
											</div>
											<div className="flex flex-col py-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">city</dt>
												<dd className="text-lg font-semibold">{modelData.address?.city}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">country_code</dt>
												<dd className="text-lg font-semibold">{modelData.address?.country_code}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">telephone</dt>
												<dd className="text-lg font-semibold">{modelData.address?.telephone}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">zipcode</dt>
												<dd className="text-lg font-semibold">{modelData.address?.zipcode}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">address</dt>
												<dd className="text-lg font-semibold">{modelData.address?.address}</dd>
											</div>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full lg:p-24 sm:p-4 ">
				<div className="flex flex-wrap -mx-3">
					<div className="w-full  px-3 mb-6 md:mb-0">
						<div className="flex flex-wrap -mx-3 mb-5">
							<div className="w-full max-w-full px-3 mb-6  mx-auto">
								<div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5 p-12">
									<div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
										<dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
											<div className="flex flex-col pb-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date of Birth</dt>
												<dd className="text-lg font-semibold">{modelData.basic_info?.dob}</dd>
											</div>
											<div className="flex flex-col py-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Eye Color</dt>
												<dd className="text-lg font-semibold">{modelData.basic_info?.eyecolor}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gender</dt>
												<dd className="text-lg font-semibold">{modelData.basic_info?.gender}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Hair Color</dt>
												<dd className="text-lg font-semibold">{modelData.basic_info?.haircolor}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Height</dt>
												<dd className="text-lg font-semibold">{modelData.basic_info?.height}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Profession</dt>
												<dd className="text-lg font-semibold">{modelData.basic_info?.profession}</dd>
											</div>
											<div className="flex flex-col pt-3">
												<dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Weight</dt>
												<dd className="text-lg font-semibold">{modelData.basic_info?.weight}</dd>
											</div>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full lg:p-24 sm:p-4 ">
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<div className="flex flex-wrap -mx-3 mb-5">
							<div className="w-full max-w-full px-3 mb-6  mx-auto">
								<div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5 p-12">
									<center>
										<h1 className="text-lg font-semibold mb-4">Passport Front</h1>
									</center>
									<div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
										<a target="_blank" href={getUrl(modelData.documents?.passport_front)}>
											<img src={getUrl(modelData.documents?.passport_front)} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<div className="flex flex-wrap -mx-3 mb-5">
							<div className="w-full max-w-full px-3 mb-6  mx-auto">
								<div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5 p-12">
									<center>
										<h1 className="text-lg font-semibold mb-4">Passport Back</h1>
									</center>
									<div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
										<a target="_blank" href={getUrl(modelData.documents?.passport_back)}>
											<img src={getUrl(modelData.documents?.passport_back)} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<div className="flex flex-wrap -mx-3 mb-5">
							<div className="w-full max-w-full px-3 mb-6  mx-auto">
								<div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5 p-12">
									<center>
										<h1 className="text-lg font-semibold mb-4">Proof of Address</h1>
									</center>
									<div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
										<a target="_blank" href={getUrl(modelData.documents?.proof_of_address)}>
											<img src={getUrl(modelData.documents?.proof_of_address)} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<div className="flex flex-wrap -mx-3 mb-5">
							<div className="w-full max-w-full px-3 mb-6  mx-auto">
								<div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5 p-12">
									<center>
										<h1 className="text-lg font-semibold mb-4">Selfie With ID</h1>
									</center>
									<div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
										<a target="_blank" href={getUrl(modelData.documents?.selfie_with_id)}>
											<img src={getUrl(modelData.documents?.selfie_with_id)} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<div className="flex flex-wrap -mx-3 mb-5">
							<div className="w-full max-w-full px-3 mb-6  mx-auto">
								<div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5 p-12">
									<center>
										<h1 className="text-lg font-semibold mb-4">Business Certification</h1>
									</center>
									<div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
										<a target="_blank" href={getUrl(modelData.documents?.business_certification)}>
											<img src={getUrl(modelData.documents?.business_certification)} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{modelData.documentsVerified == 'not_verified' &&  <div className="w-full  px-3 mb-6 md:mb-0">
						<div className="">
							<div className="inline-flex items-center">
								<label className="flex items-center cursor-pointer relative" htmlFor="check-with-link">
									<input ref={checkboxRef} type="checkbox"  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-with-link" />
									<span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth={1}>
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
										</svg>
									</span>
								</label>
								<label className="cursor-pointer ml-2 text-slate-600 text-lg font-semibold" htmlFor="check-with-link">
									<p>
										I have Verified the Documents manually
										.
									</p>
								</label>
							</div>
							<br/>
							<button onClick={verifyModel} type="button" className=" w-1/3 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{loading ? 'Please Wait' : 'Verify Documents'}</button>
						</div>
					</div>}
				</div>
			</div>
		</>
	);
}

export default ModelDetails;
