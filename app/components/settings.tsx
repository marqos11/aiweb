// ... (imports excluding Azure)
import {
  Anthropic,
  Baidu,
  // Azure removed
  ServiceProvider,
  // ... rest of constants
} from "../constant";

export function Settings() {
  const accessStore = useAccessStore();
  const shouldHideBalanceQuery = useMemo(() => {
    const isOpenAiUrl = accessStore.openaiUrl.includes(OPENAI_BASE_URL);
    return accessStore.hideBalanceQuery || isOpenAiUrl;
  }, [accessStore.hideBalanceQuery, accessStore.openaiUrl]);

  // azureConfigComponent removed completely

  return (
    // ... window UI
    <List id={SlotID.CustomModel}>
      {/* ... other config components */}
      {accessStore.useCustomConfig && (
        <>
          <ListItem title={Locale.Settings.Access.Provider.Title}>
            <Select
              value={accessStore.provider}
              onChange={(e) => accessStore.update(access => (access.provider = e.target.value as ServiceProvider))}
            >
              {Object.entries(ServiceProvider).map(([k, v]) => <option value={v} key={k}>{k}</option>)}
            </Select>
          </ListItem>
          {accessStore.provider === ServiceProvider.OpenAI && openAIConfigComponent}
          {/* Azure config component removed from JSX */}
          {accessStore.provider === ServiceProvider.Google && googleConfigComponent}
          {/* ... other providers */}
        </>
      )}
    </List>
    // ... rest of settings
  );
}
