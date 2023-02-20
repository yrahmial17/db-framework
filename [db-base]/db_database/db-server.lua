local function safeParameters(parameters)
  if parameters == nil then
    return {[''] = ''}
  end
  return parameters
end

exports('executeSync', function (query, parameters)
  local p = promise.new()
  exports.db_database:execute(query, safeParameters(parameters), function (result)
    p:resolve(result)
  end, GetInvokingResource())
  return Citizen.Await(p)

end)

exports('scalarSync', function (query, parameters)
  local res = {}
  local finishedQuery = false
  exports.db_database:scalar(query, safeParameters(parameters), function (result)
    res = result
    finishedQuery = true
  end, GetInvokingResource())
  repeat Citizen.Wait(0) until finishedQuery == true
  return res
end)

exports('transactionSync', function (query, parameters)
  local res = {}
  local finishedTransaction = false
  exports.db_database:transaction(query, safeParameters(parameters), function (result)
    res = result
    finishedTransaction = true
  end, GetInvokingResource())
  repeat Citizen.Wait(0) until finishedTransaction == true
  return res
end)
