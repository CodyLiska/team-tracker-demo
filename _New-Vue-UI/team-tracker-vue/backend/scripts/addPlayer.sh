curl -X POST -H "Content-Type: application/json" -d '{
    "name": "Test Player",
    "number": 99,
    "position": "Test Position",
    "psychological": {},
    "physical": {},
    "socialEmotional": {},
    "technical": {}
}' http://localhost:5000/api/players