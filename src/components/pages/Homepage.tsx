import { PageLayout } from "../common/PageLayout"
import { SearchForm } from "../search/SearchForm"
import { SearchResults } from "../search/SearchResults"

export const Homepage = () => {
    return (
        <PageLayout>
            <SearchForm />
            <SearchResults />
        </PageLayout>
    )
}