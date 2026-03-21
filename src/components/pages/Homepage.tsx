import { PageLayout } from "../common/PageLayout"
import { SearchForm } from "../search/SearchForm"
import { SearchResults } from "../search/SearchResults"
import { useSearch } from "../../contexts/SearchGlobal/SearchContext"
import { StateMessage } from "../search/StateMessage"

export const Homepage = () => {

    const {query, movies, isLoading} = useSearch(); 

    return (
        <PageLayout>
            <SearchForm />

        { isLoading && <StateMessage>Loading...</StateMessage>}

        { (!query && !isLoading) && <StateMessage>Start typing to find movies.</StateMessage> }

        { ((!movies || movies.length === 0) && query && !isLoading) && <StateMessage>No movies found.</StateMessage>}

        { movies?.length > 0 && <SearchResults /> }

            
        </PageLayout>
    )
}