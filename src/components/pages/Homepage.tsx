import { PageLayout } from "../common/PageLayout"
import { SearchForm } from "../common/SearchForm"
import { SearchResults } from "../common/SearchResults"

export const Homepage = () => {
    return (
        <PageLayout>
            <SearchForm />
            <SearchResults />
        </PageLayout>
    )
}