import InputBox from "../../InputBox";
import { Wrapper } from "../../../../common/Wrapper/styled";
import searchQueryParamName from "../searchQueryParamName";
import { useReplaceQueryParameter, useQueryParameter } from "../queryParameters";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };
    return (
        <Wrapper>
            <InputBox
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );

};

export default Search;