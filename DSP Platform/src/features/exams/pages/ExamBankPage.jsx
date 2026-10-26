import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FileText,
  Archive,
  Info,
} from 'lucide-react';

const ExamBankPage = () => {
  return (
    <div className="min-h-screen -m-4 sm:-m-6 bg-gradient-to-br from-lime-50 via-white to-sky-100 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-14">
          <h1 className="text-[42px] font-bold leading-tight tracking-[-0.03em] text-[#17343d] sm:text-5xl lg:text-[52px]">
            Exam Bank
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
            PDF resources for study and revision. View a file in the browser or download it.
          </p>
        </header>

        {/* Main Cards */}
        <main className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Questions by Lecture */}
          <Link
            to="/exams/questions"
            className="group relative min-h-[275px] overflow-hidden rounded-[30px] border border-[#c9e17b]/40 bg-gradient-to-br from-[#173b46] to-[#24545e] p-7 text-white shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
          >
            <div className="flex items-center justify-between">

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[19px] bg-white/15 text-[#d5f36c]">
                <FileText
                  size={21}
                  strokeWidth={1.8}
                />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d5f36c] text-[#173b46] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight
                  size={21}
                  strokeWidth={2}
                />
              </div>

            </div>

            <div className="mt-10">

              <h2 className="text-[29px] font-bold leading-tight tracking-[-0.02em] sm:text-[32px]">
                Questions by Lecture
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/80 sm:text-base">
                Question PDFs grouped by lecture or topic.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                <span className="rounded-full border border-white/20 bg-white/15 px-5 py-1 text-xs font-medium leading-5">
                  Question PDFs
                </span>

                <span className="rounded-full border border-white/20 bg-white/15 px-5 py-1 text-xs font-medium leading-5">
                  By lecture
                </span>

              </div>
            </div>
          </Link>

          {/* Past Exams */}
          <Link
            to="/exams/past-exams"
            className="group relative min-h-[275px] overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 p-7 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
          >
            <div className="flex items-center justify-between">

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[19px] bg-lime-100 text-[#173b46]">
                <Archive
                  size={21}
                  strokeWidth={1.8}
                />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#173b46] transition-all duration-300 group-hover:border-lime-300 group-hover:bg-lime-100">
                <ArrowRight
                  size={21}
                  strokeWidth={2}
                />
              </div>

            </div>

            <div className="mt-10">

              <h2 className="text-[29px] font-bold leading-tight tracking-[-0.02em] text-[#17343d] sm:text-[32px]">
                Past Exams
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Previous examination papers in PDF format.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                <span className="rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-medium leading-5 text-[#17343d]">
                  Exam PDFs
                </span>

                <span className="rounded-full border border-slate-200 bg-white px-5 py-1 text-xs font-medium leading-5 text-[#17343d]">
                  Study and revision
                </span>

              </div>
            </div>
          </Link>

        </main>

        {/* Information Banner */}
        <section className="mt-7 flex items-start gap-3 rounded-[20px] border border-sky-300 bg-sky-50/80 px-5 py-4">

          <Info
            size={19}
            className="mt-0.5 shrink-0 text-sky-700"
            strokeWidth={1.8}
          />

          <div>
            <h3 className="text-sm font-semibold leading-5 text-[#17343d]">
              Study documents only
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
              These are PDF files to view or download. There are no online tests,
              timers, or grading.
            </p>
          </div>

        </section>

      </div>
    </div>
  );
};

export default ExamBankPage;
