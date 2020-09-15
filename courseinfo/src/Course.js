import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}
  
const Total = ({ course }) => {
  const exercises = course.parts.map(part => part.exercises)
  const sum = exercises.reduce((a, b) => a + b, 0)
  return (
    <b>total of {sum} exercises</b>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
	)
}

const Content = ({ course }) => {
	return (
    <div>
			{course.parts.map(part => 
				<Part part={part} />
			)}
  	</div>
	)
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course