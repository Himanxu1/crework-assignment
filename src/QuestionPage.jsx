import { useState } from 'react';
import questionsData from './questions';
import { tags } from './questions';

const QuestionsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);
  const questionsPerPage = 10;

  const filteredQuestions = selectedTag && selectedTag !== 'All'
    ? questionsData.filter(question => question.tags.includes(selectedTag))
    : questionsData;

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleTagClick = tag => {
    setSelectedTag(tag === selectedTag ? null : tag);
    setCurrentPage(1); 
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredQuestions.length / questionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mt-6   p-20" >
      <div className='text-start'>
        <div className="text-gradient font-red-hat-display bg-clip-text text-transparent bg-gradient-to-r from-white via-rgba-250-175-62 to-white text-3xl font-bold   ">
          Project Management Interview Questions
        </div>
        <p>Browse 1000+ questions from top tech companies</p>
      </div>

      <div className="flex flex-wrap  mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            onClick={() => handleTagClick(tag)}
            className={` hover:bg-white hover:text-black cursor-pointer border border-white text-white px-2 py-1 m-2 rounded ${
              tag === selectedTag ? ' bg-white text-gray-600' : ''
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-4 mt-10">
        <div className="text-start">
          {currentQuestions.map((question, index) => (
            <div key={index} className="p-2 rounded-md mb-4">
              <h2 className="text-lg font-bold mb-2">{question.question}</h2>
              <p className=''>{question.tags.map((item)=>{
                return <span key={item} className="text-gray-400 text-sm mr-2 font-semibold">{item}</span>
              })}</p>
            </div>
          ))}
          <div className="flex justify-center mt-4 items-center">
            <p className='mr-4  lg:block hidden'>Showing {indexOfFirstQuestion + 1}-{Math.min(indexOfLastQuestion, filteredQuestions.length)} of {filteredQuestions.length} questions</p>
            <button onClick={prevPage} className={`mx-1 px-3 py-1 rounded ${currentPage === 1 ? 'bg-amber-500 text-black cursor-not-allowed' : 'bg-amber-500 text-black'}`} disabled={currentPage === 1}>Prev</button>
            {Array.from({ length: Math.ceil(filteredQuestions.length / questionsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? ' bg-amber-500 text-black' : ' text-white border border-white bg-transparent'}`}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={nextPage} className={`mx-1 px-3 py-1 rounded ${currentPage === Math.ceil(filteredQuestions.length / questionsPerPage) ? 'bg-amber-500 text-black cursor-not-allowed' : 'bg-amber-500 text-white'}`} disabled={currentPage === Math.ceil(filteredQuestions.length / questionsPerPage)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
