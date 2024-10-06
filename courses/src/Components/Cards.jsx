import Card from "./Card";
import React, { useState, useEffect, useCallback } from 'react';

const Cards = (props) => {
    console.log("Category:", props.category);
    console.log("Courses:", props.courses);

    let category = props.category || "All";
    const [likedCourses, setLikedCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);

    // Memoized getCourses function
    const getCourses = useCallback(() => {
        if (!props.courses || Object.keys(props.courses).length === 0) {
            return []; // Return an empty array if courses are not available yet
        }
        
        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return props.courses[category] || [];
        }
    }, [props.courses, category]); // Dependencies: courses and category

    useEffect(() => {
        const fetchedCourses = getCourses();
        console.log("Fetched Courses:", fetchedCourses);
        setCourses(fetchedCourses);
        setLoading(false); // Stop loading once courses are fetched
    }, [getCourses]); // Add getCourses to dependencies

    if (loading) {
        return <div>Loading courses...</div>;
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {courses && courses.length > 0 ? (
                courses.map((course) => (
                    <Card
                        course={course}
                        key={course.id} // Use course.id for a unique key
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />
                ))
            ) : (
                <p>No courses available</p>
            )}
        </div>
    );
};

export default Cards;
