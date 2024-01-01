import React from "react";

const NewTicket = () => {
  return (
    <>
      <div className="m-5 p-5 border-2 rounded-md">
        <div className="space-y-12">
          <div className="text-center ">
            <h1 className="text-3xl">Create New Ticket</h1>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Ticket No */}
            <div className="sm:col-span-3">
              <label
                htmlFor="ticket-no"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ticket No
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="ticket-no"
                  id="ticket-no"
                  placeholder="123456"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            {/* Date */}
            <div className="sm:col-span-3">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            {/* Name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            {/* Department */}
            <div className="sm:col-span-3">
              <label
                htmlFor="department"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Department
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="department"
                  id="department"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="sm:col-span-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Subject
              </label>
              <div className="block mt-2 w-full">
                <input
                  id="text"
                  name="subject"
                  type="subject"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
            <div className="col-span-2">
              {/* Category */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="category"
                    name="category"
                    autoComplete="category"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              {/* Type */}
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Type
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="type"
                    name="type"
                    autoComplete="type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              {/* Priority */}
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Priority
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="priority"
                    name="priority"
                    autoComplete="priority"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
            </div>
            {/* Description Block */}
            <div className="col-span-4">
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={7}
                    className="block w-full h-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-emerald-500 px-3 py-2 text-md text-black font-bold shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default NewTicket;
