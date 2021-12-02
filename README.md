# BulkGate Github SMS actions

Send SMS via Github actions

## Workflow

- Go to your repository settings. Click secrets and set your application_id and application_token as secrets

- Set inputs in your workflow

```
name: Send SMS after push
environment: bulkgate_api
env:
  application_id: ${{ secrets.application_id }}
  application_token: ${{ secrets.application_token }}
steps:
  - name: Send SMS after push
    uses: BulkGate/github-actions@master
    with:
      application_id: ${{ env.application_id }}
      application_token: ${{ env.application_token }}
      number: ${{ secrets.phone_number }}
      text: 'test'
      sender_id: "gText"
      sender_id_sender: "Github test"
```


## Inputs

| PARAMETER NAME | VALUE | MANDATORY | DEFAULT VALUE |
|:--- |:--- |:--- |:--- |
|application_id| [Application ID](api-administration.md#what-is-application-id) |**Yes**|-| 
|application_token| [Application token](api-tokens.md#what-is-an-api-token)	|**Yes**|-|
|number| Recipient number	|**Yes** or `admin`|-|
|admin| Number of BulkGate administrator receiving notification. [More info](http-advanced-transactional-admin.md) |**Yes** or `number`|-|
|text| Text of the SMS message (max. 612 characters, or 268 characters, if Unicode is activated), UTF-8 encoding. It is possible to add variables to the template from the `variables` array (another parameter) `Hello <first_name> <last_name> ....`	|**Yes**|-|
|variables| Associative array to add variables to text, for e.g.: `{"first_name": "John", "last_name": "Doe"}`| No | `[]` |
|unicode	|`Yes`/`true`/`1` for Unicode SMS, `no`/`false`/`0` for 7bit SMS|No|`false`|
|sender_id| Sender ID, see [Sender ID type](#sender-id-type-sender_id) | No |`gSystem`|
|sender_id_value| Sender value `gOwn`, `gText`, `gMobile`, `gProfile` or `gPush` (if `gMobile`, or `gPush` used, please supply `mobile connect key` as `sender_id_value`)| No |`null`|
|country| Provide recipient numbers in international format (with prefix, for e.g `44`), or add [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (`7820125799` + `GB` = `447820125799`). See the example of a country requirement. If the value is **`null,`** your set time zone will be used to fill in the information | No |`null`|
|schedule| Schedule the sending time and date in [unix timestamp,](https://en.wikipedia.org/wiki/Unix_time) or [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). | No |Now|
|duplicates_check| Select **`on`** to prevent sending duplicate messages to the same phone number. Messages with the same text sent to the same number will be removed if there is a time interval shorter than 5 mins. If **`off`** no duplicates will be removed. |No|`off`|
|tag|Message label for subsequent retrieval of the user.|No|-|

### Sender ID type `sender_id`

| VALUE| MEANING|
|:--- |:---|
|`gSystem` |System number| 
|`gShort`|Short Code| 
|`gText` |Text sender| 
|`gMobile`|Mobile Connect - Sends SMS message through Mobile Connect app|
|`gPush`|Mobile Connect push - Sends a notification to the Mobile Connect app|
|`gOwn` |Own number (requires number verification)| 
|`gProfile`|[BulkGate Profile ID](sender-id-profile.md)|
| `<int>` |BulkGate Profile ID| 

