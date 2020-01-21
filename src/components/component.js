import React from 'react';
import JobList from './JobsPage/jobList';
import TeamMembers from './AboutTeam/teams';
import PageNotFound from './PageNotFound/PageNotFound';

const Jobs = () => {
    return <JobList />
}

const Team = () => {
    return <TeamMembers />
}

const NotFound = () => {
    return <PageNotFound />
}

export { Jobs, Team, NotFound }