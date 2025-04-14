from supabase import create_client, Client
import pandas as pd


#______________________Getting the data______________________
data = None
def get_data():
    global data
    url = "https://vgwvxacwjnbtdqtxjhet.supabase.co"
    key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnd3Z4YWN3am5idGRxdHhqaGV0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDYxNjYwMiwiZXhwIjoyMDYwMTkyNjAyfQ.yWgi3HzbIIQkoH8g_gSX0V2lBU4ATw3Qr3plYSPQca8"
    supabase: Client = create_client(url, key)

    # Ejemplo: leer datos de una tabla
    response = supabase.table('Products').select('*').execute()
    #print(response.data)

    data = response.data
    df = pd.DataFrame(data)
    data = df
    print(data.head())

def get_column_values(df: pd.DataFrame,name:str) -> set:
    result = set(df[name])
    return result


#We get the data
get_data()
